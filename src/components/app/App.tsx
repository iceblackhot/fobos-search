import {FC} from 'react';
import {ThemeProvider} from '../../providers/themeProvider';
import AppContextProvider from '../appContext/appContext';
import {Filters} from '../filters/filters';
import {Footer} from '../footer/footer';
import {Header} from '../header/header';
import {ModalContent} from '../modal/modalContent/modalContent';
import {TaskList} from '../taskList/taskList';
import {Wrapper} from '../wrapper/wrapper';
import './App.scss';

export const App: FC = () => {
  return (
    <AppContextProvider>
      <ThemeProvider>
        <Wrapper>
          <Header />
          <Filters />
          <ModalContent />
          <TaskList />
          <Footer />
        </Wrapper>
      </ThemeProvider>
    </AppContextProvider>
  );
};
