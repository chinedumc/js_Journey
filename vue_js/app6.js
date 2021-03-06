var app = new Vue({
    el: '#app6',
    data: {
    sliderStatus: false,
    inputWidth: 60,
     labelArr: ['font-weight-bold', 'mr-2'],   
     maximum: 99,
     products: null,
     cart: []
    },
    computed: {
        sliderState: function() {
            return this.sliderStatus ? 'd-flex' : 'd-none'
        }
    
    },
    methods: {
     addItem: function(product) {
      this.cart.push(product);
     }
    },
    mounted: function() {
     fetch('https://hplussport.com/api/products/order/price')
     .then(response => response.json())
     .then(data => {
       this.products = data;
     })
    }
   });