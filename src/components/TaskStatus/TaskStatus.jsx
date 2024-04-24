import { Tabs, TabList, Tab} from '@chakra-ui/react'

const TaskStatus = ({setStatus}) => {
    return(
    <div className='todo__block-tabs'>
        <Tabs variant='soft-rounded' colorScheme='green'>
            <TabList>
                <Tab onClick={() => setStatus('all')}>Все задачи</Tab>
                <Tab onClick={() => setStatus('important')}>Важные</Tab>
                <Tab onClick={() => setStatus('done')}>Выполненные</Tab>

            </TabList>
        </Tabs>
    </div>
    )}

export default TaskStatus