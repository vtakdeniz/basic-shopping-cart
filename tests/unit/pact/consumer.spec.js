
const { pactWith } = require("jest-pact")
const { Matchers } = require("@pact-foundation/pact")
import {fetchAllProducts,fetchAllBasket,addProductToBasket,decreaseProductInBasket,clearBasketApi} from '../../../Api'


pactWith(
  { consumer: "ShoppingCartClient", provider: "ShoppingCartApi" },
  provider => {

    describe("get products", () => {
      const PRODUCTS_DATA = 
        {
            id:          1,
            category:    "Home",
            title:       "Wooden dinner table",
            description: "Wooden table for dinner room",
            price:       1250,
            pic_link:    "https://ronixtools.com/en/blog/wp-content/uploads/2021/03/Learn-how-to-make-a-simple-wooden-table-at-home1.jpg",
        }

      const productSuccessResponse = {
        status: 200,
        body: Matchers.eachLike(PRODUCTS_DATA),
      }

      const productListRequest = {
        uponReceiving: "a request for products",
        withRequest: {
          method: "GET",
          path: "/api/products"
        },
        body:[
            PRODUCTS_DATA
        ]
      }

      beforeEach(() => {
        const interaction = {
          state: "i have a list of products",
          ...productListRequest,
          willRespondWith: productSuccessResponse,
        }
        return provider.addInteraction(interaction)
      })
      
      // add expectations
      it("returns a successful body", () => {
        return fetchAllProducts(provider.mockService.baseUrl).then(comm => {
          expect(comm).toEqual([PRODUCTS_DATA])
        })
      })
    })

    describe("decrease product", () => {

      const productSuccessResponse = {
        status: 200
      }

      const productDeleteRequest = {
        uponReceiving: "a request for decreasing a product from the basket",
        withRequest: {
          method: "DELETE",
          path: "/api/basket/1",
        },
      }

      beforeEach(() => {
        const interaction = {
          state: "i will decrease product from basket",
          ...productDeleteRequest,
          willRespondWith: productSuccessResponse,
        }
        return provider.addInteraction(interaction)
      })
      
      // add expectations
      it("returns successful status with no body data", () => {
        return decreaseProductInBasket(provider.mockService.baseUrl,1).then(comm => {
          expect(comm).toEqual("")
        })
      })
    })


    describe("add product to the basket", () => {
      const productSuccessResponse = {
        status: 200
      }

      const productListRequest = {
        uponReceiving: "post request to add product to basket",
        withRequest: {
          method: "POST",
          path: "/api/basket/1",
        },
      }

      beforeEach(() => {
        const interaction = {
          state: "i will add product to the basket",
          ...productListRequest,
          willRespondWith: productSuccessResponse,
        }
        return provider.addInteraction(interaction)
      })
      
      // add expectations
      it("returns a successful status with no body data", () => {
        return addProductToBasket(provider.mockService.baseUrl,1).then(comm => {
          expect(comm).toEqual("")
        })
      })
    })

    describe("clear basket", () => {
  
        const productSuccessResponse = {
          status: 200
        }
  
        const productListRequest = {
          uponReceiving: "request for clearing basket",
          withRequest: {
            method: "DELETE",
            path: "/api/basket/",
          },
        }
  
        beforeEach(() => {
          const interaction = {
            state: "i will clear the basket",
            ...productListRequest,
            willRespondWith: productSuccessResponse,
          }
          return provider.addInteraction(interaction)
        })
        
        // add expectations
        it("returns a successful status with no body data", () => {
          return clearBasketApi(provider.mockService.baseUrl).then(comm => {
            expect(comm).toEqual("")
          })
        })
      })


      describe("get basket", () => {
  
        const PRODUCT_WRAPPER_DATA={
            product:{
                id:          1,
                category:    "Home",
                title:       "Wooden dinner table",
                description: "Wooden table for dinner room",
                price:       1250,
                pic_link:    "https://ronixtools.com/en/blog/wp-content/uploads/2021/03/Learn-how-to-make-a-simple-wooden-table-at-home1.jpg",
            },
            productCount:1
        }

        const productSuccessResponse = {
          status: 200,
          body:Matchers.eachLike(PRODUCT_WRAPPER_DATA)
        }
  
        const productListRequest = {
          uponReceiving: "request for basket",
          withRequest: {
            method: "GET",
            path: "/api/basket",
          },
        }
  
        beforeEach(() => {
          const interaction = {
            state: "i will get the basket",
            ...productListRequest,
            willRespondWith: productSuccessResponse,
          }
          return provider.addInteraction(interaction)
        })
        
        // add expectations
        it("returns a successful status with no body data", () => {
          return fetchAllBasket(provider.mockService.baseUrl).then(comm => {
            expect(comm).toEqual([PRODUCT_WRAPPER_DATA])
          })
        })
      })


    }
  )