const HomeComponent = {
    templateUrl: 'home/home.tpl.html',
    bindings: {},
    controller: function () {
      'ngInject';
      // ViewModel
      const vm = this;
  
      vm.title = 'AngularJS, Gulp, and Browserify! Written with keyboards and love!';
      vm.number = 1234;
    }
}

export default {
	name: 'home',
	obj: HomeComponent
};