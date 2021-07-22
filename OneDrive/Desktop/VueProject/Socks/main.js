Vue.component('product',
{   
    template:`
        <div class="product">
            <div class="product-image">
                <img :src="image" alt="product">
            </div>
            <div class="product-info">
                <h1>
                    {{makeTitle}}
                </h1> 

                <p v-if='inStock' v-on:click="makeFalse">
                    In Stock
                </p>

                <p v-else v-on:click="makeTrue">
                    Out of Stock
                </p>

                stock<input type="number" v-model.lazy='inventory'>

                <button style="float:right; margin:0;" >
                    확인
                </button>

                <p v-if='inventory>10'>
                    In Stock
                </p>

                <p v-else-if='inventory<=10 && inventory>0'>
                    Almost sold out!
                </p>

                <p v-else='inventory<0'>
                    Out of Stock
                </p>

                <input type="text" v-model.lazy='details'>

                <ul>
                    <li v-for='detail in details'>{{detail}}</li>
                </ul>

                <div v-for='(variant, index) in variants' :key="variant.variantId" class="color-box" style="color : white;" :style='{backgroundColor:variant.variantColor}' @mouseover='updateProduct(index)'>
                    {{variant.variantColor}}
                </div>

                <button @click='addToCart' :disabled="!inStock" :class="{disabledButton:!inStock}">
                    Add to Cart
                </button>
                <br>
                <button @click='removeFromCart' :disabled="!inStock" :class="{disabledButton:!inStock}">
                    Remove from Cart
                </button>
            </div>      
        </div>`,

    data(){
        return {
            product : 'Socks',
            inventory : '',
            details : ['a','b','c'],
            variants:[{variantId:2234, variantColor:"green", variantImage:"./assets/images/socks_green.jpg", variantQuantity:10},
            {variantId:2235, variantColor:"blue", variantImage:"./assets/images/socks_blue.jpg", variantQuantity:0}],
            brand:'CDG ',
            selectedVariant:0,
        };
    },

    methods:{
        makeTrue(){
            this.inStock=true;
        },

        makeFalse(){
            this.inStock=false;
        },

        updateProduct(index){
            this.selectedVariant = index;
        },
        addToCart: function() {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)
        },
        removeFromCart: function() {
            this.$emit('remove-from-cart', this.variants[this.selectedVariant].variantId)
        }
    },
    computed:{
        makeTitle(){
            return this.brand+this.product;
        },
        image(){
            return this.variants[this.selectedVariant].variantImage;
        },
        inStock(){
            return this.variants[this.selectedVariant].variantQuantity;
        }
    }

});

const app = new Vue({
    el: '#root',
      data: {
          cart:[],
      },
      methods: {
        addToCart(id){
            this.cart.push(id);
        },

        removeFromCart(id){
            this.cart.pop(id);
        },
      }
});