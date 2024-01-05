 <template>
    <div id="product-information">
        <div id="product-image">
            <img v-bind:src="image">
        </div>
        <div id="product-form">
            <div id="product-title">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
            </div>
            <div id="product-price">
                <p>$0.00 CAD</p>
            </div>
            <div id="product-divider"></div>
            <div id="product-description-short">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div id="add-to-cart-form">
                <form>
                    <span id="quantity-input-content">
                        <input id="quantity-input" value="1" type="number">
                    </span>
                    <span>
                        <button id="add-to-cart-btn">Add to cart</button>
                    </span>
                </form>
            </div>
        </div>
    </div>
    
    <div id="product-description-section">
        <div id="product-divider"></div>
        <div id="description-header">
            <p>Description</p>
        </div>
        <div id="product-divider"></div>
        <div v-html="test" id="product-description"></div>
    </div>
</template>

<script>
import {ref} from "vue"

export default {
    name: "ProductInformation",
    props: ["image", "description"],
    setup(props) {
        const test = ref(props.description)
        return {
            test
        }
    }
}
</script>

<style scoped>
#product-information {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 3rem;
    flex-wrap: wrap;
    margin-bottom: 4rem;
}

#product-image {
    width: 500px;
    height: 500px;
    margin-right: 2rem;
}

#product-image > img {
    width: 100%;
    height: 100%;
}

#product-form {
    margin-left: 2rem;
    width: 50%;
    height: relative;
}

#product-title {
    font-size: 1.75rem;
}

#product-price {
    margin-top: .75rem;
    font-size: 1.25rem;
    margin-bottom: 2.5rem;
}

#product-divider {
    width: 100%;
    height: 1px;
    background-color: black;
    opacity: 0.2;
}

#product-description-short {
    margin-top: 1.25rem;
    opacity: 0.5;
    line-height: 1.75;
    margin-bottom: 1.25rem;
}

#add-to-cart-form {
    display: flex;
    align-items: center;
}

#quantity-input {
    padding: 22px 18px;
    background: none;
    border: 1px solid #3a3a3a;
    /* border-radius: 4px; */
    font-size: 100%;
    width: 50px;
}

#add-to-cart-btn {
    border: 1px solid #3a3a3a;
    color: #3a3a3a;
    background-color: white;
    width: 250px;
    padding: 22px 18px;
    font-size: 13px;
    text-transform: uppercase;
    /* border-radius:4px; */
}

#quantity-input-content {
    margin-right: .5rem;
}

#description-header {
    font-size: 1.35rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
}

#product-description {
    margin-top: 2rem;
    margin-bottom: 2rem;
}

</style>