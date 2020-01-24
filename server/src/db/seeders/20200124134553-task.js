'use strict';
import moment from 'moment';
import {User} from '../models';



function generateTasks () {


  const tasks = [];
  for (let i = 0; i < 100;i++){

    for(let j=0;j<10;j++){
      tasks.push({
        userId:i+1,
        value:`User#${i+1} task value #${j+1}`,
        isDone:Math.random()>0.5,
        deadline: moment().set('date',70+j).toDate(),
        createdAt: new Date(),
        updatedAt: new Date()
                 })
    }

  }

    return tasks;
}

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Tasks', generateTasks(), {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Tasks', null, {});

  }
};
