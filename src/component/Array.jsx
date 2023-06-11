const todos = [
    {
      title: 'Go to School!',
      isCompleted: false
    },
    {
      title: 'Buy milk!',
      isCompleted: true
    },
    {
      title: 'Drive a Car!',
      isCompleted: false
    }
  ];
  
  export default function TodoList () {
    return (
      <div>
        {todos.map((todo, index) => (
          <div key={index}>
            <h3>{todo.title}</h3>
            <input type="checkbox" checked={todo.isCompleted} />
          </div>
        ))}
      </div>
    );
  };
  
  
  