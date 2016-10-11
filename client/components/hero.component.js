angular.module('heroApp').
	component('hero', {
		template:
			'<div id="hero">' +
				'<div class="row" id="nav" ng-submit="$ctrl.selectCharacter(name)">'+
				'<form class="inputbox">' + 
	  				'<input ng-model="name" required="required"/>' +
	  				'<button type="reset" class="del"></button>' +
				'</form>' + 
				'</div>' +
				'<div class="row">'	+ 
					'<div class="col-md-6" id="hero-image-section">' +
						'<img ng-src="{{$ctrl.heroPath}}" img-responsive center-block" id="hero-image"></img>' +
					'</div>' +
					'<div class="col-md-6" id="hero-bio-section">' +
						'<h1 id="hero-name">{{$ctrl.name}}</h1>' +
						'<p id="hero-bio">{{$ctrl.description}}</p>' +
					'</div class="col-md-6>' +
					'</div>' +
				'</div>' +
			'</div>',
		controller: function heroComponent($http) {
			const vm = this;
			 this.selectCharacter = function(name){
				$http.get('/api/charachter?name=' + name). 
				then(function(response){
					vm.heroPath = response.data.data[0].thumbnail.path + '.' + response.data.data[0].thumbnail.extension;
					vm.description = response.data.data[0].description;
					vm.name = response.data.data[0].name;
					console.log(response.data.data[0])
				})
			}
			this.selectCharacter('wolverine');
		}
	})

