import React from 'react'
import TodoListFilterSettingCtrl from '../../containers/todo-list-filter-setting-ctrl'

const ControlSection = () => (
  <div>
    Show:
    <TodoListFilterSettingCtrl filterType="all">
      All
    </TodoListFilterSettingCtrl>
    <TodoListFilterSettingCtrl filterType="active">
      Active
    </TodoListFilterSettingCtrl>
    <TodoListFilterSettingCtrl filterType="completed">
      Completed
    </TodoListFilterSettingCtrl>
  </div>
)

export default ControlSection;
