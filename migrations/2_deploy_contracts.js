const ToDoList = artifacts.require("ToDo");

module.exports = function(deployer) {
  deployer.deploy(ToDoList);
};
