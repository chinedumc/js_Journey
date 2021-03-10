var data = {
    maximum: 99,
    products: [
        {
            'name': "Bamboo Thermal Ski Coat",
            'description': "You'll be the most environmentally conscious skier on the slopes- and the most stylish - wearing our fitted coat.",
            'image': "images/ski-coat_LYNDA_29940.jpg",
            'price': 99
        },

        {
            'name': "Slicker Jacket",
            'description': "Wind and rain are no match for our organic bamboo slicker jacket for men and women. Triple stitched seams, zippered pockets, and a stay-tight hood are just a few features of our best-selling jacket.",
            'image': "https://hplussport.com/wp-content/uploads/2016/12/slicker-jacket_LYNDA_29941.jpg",
            'price': 125
        },

        {
            'name': "Thermal Fleece Jacket",
            'description': "Our thermal organic fleece jacket, is brushed on both sides for ultra softness and warmth. This medium-weight jacket is versatile all year around, and can be worn with layers for the winter season.",
            'image': "https://hplussport.com/wp-content/uploads/2016/12/thermal-jacket_LYNDA_29943.jpg",
            'price': 60
        }
    ]
    
}

var app = new Vue({
    el:'#app',
    data: data
});