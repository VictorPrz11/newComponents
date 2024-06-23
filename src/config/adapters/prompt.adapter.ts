import prompt, { PromptOptions } from "react-native-prompt-android";
interface Options {
    title: string,
    message?: string,
    components: PromptButton[],
    promptType?: 'default' |'plain-text' |'secure-text',
    placeHolder?: string,
    defaultValue ? : string
}
interface PromptButton {
    text: string,
    onPress: () => void,
    style?: 'cancel' | 'destructive' | 'default'
}
export const ShowPrompt = ({ title, message, components,promptType = 'plain-text',placeHolder,defaultValue }: Options) => {
    prompt(
        title,
        message,
        components,
        {
            type: promptType,
            cancelable: false,
            defaultValue: defaultValue,
            placeholder: placeHolder //just works in android
        }
    );
}