import { toggleTask } from '@entities/task/model'
import { Task as TaskType } from '@entities/task/type'
import { CheckBox, Label, Wrapper } from './styled'

export const Task: React.FC<TaskType> = ({ id, text, isClosed }) => {
    const onCheck = () => {
        toggleTask(id)
    }

    return (
        <Wrapper>
            <Label isClosed={isClosed} htmlFor={id}>
                <CheckBox
                    type="checkbox"
                    onChange={onCheck}
                    id={id}
                    name={id}
                    value={text}
                    checked={isClosed}
                />
                {text}
            </Label>
        </Wrapper>
    )
}
