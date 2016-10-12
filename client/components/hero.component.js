angular.module('heroApp').
	component('hero', {
		template:
			`<div id="hero-style">
				<div class="row" id="nav" ng-submit="$ctrl.selectCharacter(name)">
				<form class="inputbox">
	  				<input ng-model="name" required="required"/>
	  				<button type="reset" class="del"></button>
	  				<span ng-if="$ctrl.search" class="animate-if"> Charachter not found </span>
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
					<h2 id="comics-headline">Appearances</h2>
					<ul class"row" id="comics-row">
						<li ng-repeat="comic in $ctrl.comics" class="col-sm-3">
							<a href="{{comic.urls[0].url}}"><img ng-src="{{comic.images[0].path +  '/portrait_uncanny.' + comic.images[0].extension}}"></a>
							<h3>{{comic.title}}</h3>
							<p>{{comic.description.includes("<") ? "Description unavailble" : comic.description.split(".")[0] + "."}}</p>
							
						</li>
					</ul>
					</div>
			</div>`,
		controller: function heroComponent($http) {
			const vm = this;
			 this.selectCharacter = function(name){
				$http.get('/api/charachter/person?name=' + name). 
				then(function(response){
					vm.heroPath = response.data.data[0].thumbnail.path + '.' + response.data.data[0].thumbnail.extension;
					vm.name = response.data.data[0].name;
					vm.id = response.data.data[0].id
					vm.search = false;
					vm.description = response.data.data[0].description;
					$http.get('/api/charachter/id?id=' + vm.id).
					then(function(response){
						vm.comics = response.data.data.slice(0,8);
					})
				}).catch(function(){
					vm.search = true;
				});

			}
			this.selectCharacter('wolverine');
		}
	});

