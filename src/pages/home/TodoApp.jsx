import Header from '../../components/Header';
import BodyApp from '../../components/BodyApp';
import { userOnAuthChanged } from '../../firebase';
import { redirect } from 'react-router-dom';

export async function loader() {

    const res = userOnAuthChanged();
    console.log(res);
    if (res === null) {
        return redirect('/login');
    }

}

const TodoApp = () => {

    return (
        <div>
            <Header />
            <BodyApp />
        </div>
    );
}

export default TodoApp;
