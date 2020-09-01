import Chip from '@material-ui/core/Chip';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { emphasize } from '@material-ui/core/styles/colorManipulator';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import React from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import Select from 'react-select';
import Creatable from 'react-select/creatable';

const useStyles = makeStyles(theme => ({
	root: {
		'& .fuse-chip-select__input': {
			color: theme.palette.text.primary
		},
		'&.standard': {
			'& $placeholder': {},
			'& $valueContainer': {
				paddingTop: 4
			}
		},
		'&.filled': {
			'& $placeholder': {
				left: 12
			},
			'& $valueContainer': {
				paddingTop: 24,
				paddingLeft: 12
			},
			'& $chip': {
				border: '1px solid rgba(0, 0, 0, 0.12)'
			}
		},
		'&.outlined': {
			'& $placeholder': {
				left: 12
			},
			'& $valueContainer': {
				paddingLeft: 12,
				paddingTop: 12
			}
		}
	},
	input: {
		display: 'flex',
		padding: 0,
		height: 'auto'
	},
	valueContainer: {
		display: 'flex',
		flexWrap: 'wrap',
		flex: 1,
		alignItems: 'center',
		paddingBottom: 4,
		paddingTop: 12,
		minHeight: 40
	},
	chip: {
		margin: '4px 4px 4px 0'
	},
	chipFocused: {
		backgroundColor: emphasize(
			theme.palette.type === 'light'
				? theme.palette.grey[300]
				: theme.palette.grey[700],
			0.08
		)
	},
	noOptionsMessage: {
		padding: `${theme.spacing()}px ${theme.spacing(2)}px`
	},
	singleValue: {
		fontSize: 16
	},
	placeholder: {
		position: 'absolute',
		left: 0,
		fontSize: 16,
		margin: 0
	},
	paper: {
		position: 'absolute',
		zIndex: 2,
		marginTop: theme.spacing(),
		left: 0,
		right: 0
	},
	divider: {
		height: theme.spacing(2)
	}
}));

function NoOptionsMessage(props) {
	const classes = useStyles();

	return (
		<Typography
			color="textSecondary"
			className={classes.noOptionsMessage}
			{...props.innerProps}
		>
			{props.children}
		</Typography>
	);
}

function inputComponent({ inputRef, ...props }) {
	return <div ref={inputRef} {...props} />;
}

function Control(props) {
	const classes = useStyles();

	return (
		<TextField
			fullWidth
			className={clsx(
				classes.root,
				props.selectProps.textFieldProps.variant
			)}
			required={props.selectProps.required}
			InputProps={{
				inputComponent,
				inputProps: {
					className: classes.input,
					inputRef: props.innerRef,
					children: props.children,
					...props.innerProps
				}
			}}
			{...props.selectProps.textFieldProps}
		/>
	);
}

function Option(props) {
	return (
		<MenuItem
			buttonRef={props.innerRef}
			selected={props.isFocused}
			component="div"
			style={{
				fontWeight: props.isSelected ? 600 : 400
			}}
			{...props.innerProps}
		>
			{props.children}
		</MenuItem>
	);
}

function Placeholder(props) {
	const classes = useStyles();

	return (
		<Typography
			color="textSecondary"
			className={classes.placeholder}
			{...props.innerProps}
		>
			{props.children}
		</Typography>
	);
}

function SingleValue(props) {
	const classes = useStyles();

	return (
		<div className={classes.singleValue} {...props.innerProps}>
			{props.children}
		</div>
	);
}

function ValueContainer(props) {
	const classes = useStyles();

	const valueContainerComponent = props.selectProps.isSortable ? (
		<DroppableValueContainer classes={classes} {...props} />
	) : (
		<div className={classes.valueContainer}>{props.children}</div>
	);

	return valueContainerComponent;
}

function DroppableValueContainer(props) {
	const { onDragEnd } = props.selectProps;

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<Droppable
				droppableId="valueContainer"
				type="list"
				direction="horizontal"
			>
				{provided => (
					<div
						ref={provided.innerRef}
						className={props.classes.valueContainer}
					>
						{props.children}
					</div>
				)}
			</Droppable>
		</DragDropContext>
	);
}

function MultiValue(props) {
	const classes = useStyles();

	const chipComponent = props.selectProps.isSortable ? (
		<DraggableChip classes={classes} {...props} />
	) : (
		<Chip
			tabIndex={-1}
			label={props.children}
			className={clsx(
				classes.chip,
				{
					[classes.chipFocused]: props.isFocused
				},
				props.data.class
			)}
			onDelete={event => {
				props.removeProps.onClick();
				props.removeProps.onMouseDown(event);
			}}
		/>
	);

	return chipComponent;
}

function DraggableChip(props) {
	const handleOnMouseDown = e => {
		e.preventDefault();
		e.stopPropagation();
	};
	return (
		<Draggable draggableId={props.children} type="list" index={props.index}>
			{(provided, snapshot) => (
				<div ref={provided.innerRef} {...provided.draggableProps}>
					<Chip
						tabIndex={-1}
						label={props.children}
						className={clsx(
							props.classes.chip,
							{
								[props.classes.chipFocused]: props.isFocused
							},
							props.data.class
						)}
						onDelete={event => {
							props.removeProps.onClick();
							props.removeProps.onMouseDown(event);
						}}
						{...props.data.props}
						onMouseDown={handleOnMouseDown}
						clickable={snapshot.isDragging}
						{...provided.dragHandleProps}
					/>
				</div>
			)}
		</Draggable>
	);
}

function Menu(props) {
	const classes = useStyles();

	return (
		<Paper square className={classes.paper} {...props.innerProps}>
			{props.children}
		</Paper>
	);
}

const components = {
	Control,
	Menu,
	MultiValue,
	NoOptionsMessage,
	Option,
	Placeholder,
	SingleValue,
	ValueContainer
};

function SortableSelectInput(props) {
	const handleOnChange = value => {
		if (value === null) {
			value = [];
		}
		if (props.onChange) {
			props.onChange(value);
		}
	};

	return props.variant === 'fixed' ? (
		<Select
			classNamePrefix="fuse-chip-select"
			{...props}
			components={components}
			onChange={handleOnChange}
		/>
	) : (
		<Creatable
			classNamePrefix="fuse-chip-select"
			{...props}
			components={components}
			onChange={handleOnChange}
		/>
	);
}

export default React.memo(SortableSelectInput);