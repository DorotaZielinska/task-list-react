import "./style.css";

const Form = (props) => (
    <form className="form">
            <input className="form__field" name="newTask" type="any" placeholder="Co jest do zrobienia?"
              autofocus />
            <button className="form__button">Dodaj zadanie</button>
          </form>
)

export default Form;