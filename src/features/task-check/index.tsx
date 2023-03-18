import { toggleTask } from '@entities/task/model'
import { Task as TaskType } from '@entities/task/type'
import { CheckBox, Wrapper } from './styled'

export const Task: React.FC<TaskType> = ({ id, text }) => {
    const onCheck = () => {
        toggleTask(id)
    }

    return (
        <Wrapper>
            <label htmlFor={id}>
                <CheckBox
                    type="checkbox"
                    onChange={onCheck}
                    id={id}
                    name={id}
                    value={text}
                />
                {text}
            </label>
        </Wrapper>
    )
}
