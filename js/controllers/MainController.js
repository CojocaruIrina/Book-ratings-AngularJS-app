app.controller('MainController', ['$scope', function($scope) { 
    $scope.title = 'This Month\'s Bestsellers'; 
    $scope.promo = 'The most popular books this month.';
    $scope.products = [
        { 
          name: 'The Book of Trees', 
          price: 19, 
          pubdate: new Date('2014', '03', '08'), 
          cover: 'https://s13emagst.akamaized.net/products/18053/18052050/images/res_f1a3d72e91dc7574c6cf4216c0f6d3c1.jpg',
          likes: 0,
        dislikes:0
        }, 
        { 
          name: 'Program or be Programmed', 
          price: 8, 
          pubdate: new Date('2013', '08', '01'), 
          cover: 'http://dtc-wsuv.org/wp/375-spring14-rditty/files/2014/02/rush1.jpg',
          likes: 0,
         dislikes:0
        }, 
        { 
          name: 'Harry Potter & The Prisoner of Azkaban', 
          price: 11.99, 
          pubdate: new Date('1999', '07', '08'), 
          cover: 'https://cdn.dc5.ro/img-prod/25731288-0.jpeg',
          likes: 0,
         dislikes:0 
        }, 
        { 
          name: 'Ready Player One', 
          price: 7.99, 
          pubdate: new Date('2011', '08', '16'), 
          cover: 'http://upload.wikimedia.org/wikipedia/en/a/a4/Ready_Player_One_cover.jpg',
          likes: 0,
         dislikes:0
        }
    ];
    $scope.plusOne = function(index) { 
        $scope.products[index].likes += 1; 
      };
     $scope.minusOne= function(index) { 
        $scope.products[index].dislikes += 1; 
      };
  }]);
  