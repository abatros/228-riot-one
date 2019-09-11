import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { FlowRouter } from 'meteor/kadira:flow-router';

import './main.html';
import riot from 'riot';
import {compile} from '@riotjs/compiler'

const m = riot.register('app',
  `
  <section class="todoapp">
    <header class="header">
      <h1>todos</h1>
      <input class="new-todo js-new-todo" placeholder="What needs to be done?" autofocus>
    </header>
  </section>
  <footer class="info">
    <p>Double-click to edit a todo</p>
    <p>Created by <a href="http://github.com/michalsnik">Michał Sajnóg</a></p>
    <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
  </footer>
  `,

  function(opts) {

  }

);


console.log(`riot.register=>`,m)


Meteor.startup(() => {
  console.log(`startup`);
  const x = riot.mount('app',{
    onMounted: ()=>{console.log('MOUNTED')}
  });


  (async function main() {
    await compile()

    const components = riot.mount('app',{
      onBeforeMount: ()=>{console.log('before-MOUNTED')},
      onMounted: ()=>{console.log('MOUNTED')}
    })
  }())

});


FlowRouter.route('/', {
  name: 'Todos.all',
  action() {},
});
