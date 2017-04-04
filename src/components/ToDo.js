import React from 'react';

const ToDo = ({object}) => (
  <div>
    <header>
      <h1 id="title">{object.title}</h1>
    </header>
    <section id="description">
      {object.description}
    </section>
    <div><button onClick={() => object.toggleTodo()}>Toggle</button></div>
  </div>
);

ToDo.propTypes = {
  object: React.PropTypes.shape({
    title: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
    isCompleted: React.PropTypes.bool.isRequired
  })
};

export default ToDo;
