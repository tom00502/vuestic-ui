import { defineApiDescription } from "~/modules/page-config/runtime";

export default defineApiDescription({
  props: {
    value: "The input value",
    type: "Sets input type",
    label: "Sets input label",
    innerLabel: "Makes label render inside input",
    placeholder: "Sets input placeholder",
    mask: "Sets input mask if using as string or options for mask",
    color: "Sets input color",
    tabindex: "Sets input tabindex",
    clearValue: "Sets value that should be set after clearing",
    autosize: "Sets textarea possibility to grow up automatically",
    minRows: "Minimal count of lines",
    maxRows: "Maximum count of lines",
    rules: "Accepts an array of functions that take an input value as an argument and return either true / false or a string with an error message",
    disabled: "Disable the input",
    readonly: "Puts input in readonly state",
    success: "Sets input state to success",
    messages: "Displays a list of messages or message if using a string",
    error: "Sets input state to error",
    errorMessages: "Displays a list of error messages or message if using a string",
    errorCount: "Number of error messages displayed",
    ariaLabel: "The aria-label of the component",
    closeOnAnchorClick: "Dropdown will be closed when anchor is clicked",
    closeOnContentClick: "Dropdown will be closed when clicked inside dropdown content",
    resize: "Sets textarea resize",
    counter: "Shows counter",
    maxLength: "Sets max length of input",
  },
});