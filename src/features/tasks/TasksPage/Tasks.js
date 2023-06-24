import Form from './Form';
import Buttons from './Buttons';
import Section from "../../../common/Section";
import Header from '../../../common/Header';
import Container from '../../../common/Container';
import TasksList from './TasksList';
import Search from './Search';

function Tasks() {
  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />
       <Section
        title="Wyszukiwarka"
        body={<Search />}
      />
      <Section
        title="Lista zadań"
        extraHeaderContent={
          <Buttons />}
        body={<TasksList />}
      />
    </Container>
  );
}

export default Tasks;
