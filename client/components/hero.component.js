angular.module('heroApp').
	component('hero', {
		template:
			`<div id="hero-style">
				<div class="row" id="nav" ng-submit="$ctrl.selectCharacter(name)">
				<form class="inputbox">
	  				<input ng-model="name" required="required"/>
	  				<button type="reset" class="del"></button>
				</form> 
				</div>
				<div class="row"> 
					<div class="col-md-6" id="hero-image-section">
						<img ng-src="{{$ctrl.heroPath}}" img-responsive center-block" id="hero-image"></img>
					</div>
					<div class="col-md-6" id="hero-bio-section">
						<h1 id="hero-name">{{$ctrl.name}}</h1>
						<p id="hero-bio">{{$ctrl.description}}</p> 
					</div>
				</div>
			</div>
			<div class="row text-center">
				<h2 id="comics-headline">Appearences<h2>
				<ul class"row" id="comics-row">
					<li ng-repeat="comic in $ctrl.comics" class="col-md-3">
						<img ng-src="{{comic.images[0].path +  '/portrait_incredible.' + comic.images[0].extension}}">
					</li>
				</div>
			</div>`,
		controller: function heroComponent($http) {
			const vm = this;
			 this.selectCharacter = function(name){
				$http.get('/api/charachter/person?name=' + name). 
				then(function(response){
					vm.heroPath = response.data.data[0].thumbnail.path + '.' + response.data.data[0].thumbnail.extension;
					vm.description = response.data.data[0].description;
					vm.name = response.data.data[0].name;
					vm.id = response.data.data[0].id

					$http.get('/api/charachter/id?id=' + vm.id).
					then(function(response){
						vm.comics = response.data.data.slice(0,4);
						console.log(vm.comics)
					})
				})

			}
			this.selectCharacter('wolverine');
		}
	});

