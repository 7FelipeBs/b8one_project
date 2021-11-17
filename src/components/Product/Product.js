import React, { Component }  from "react";
import PcImage from '../../icons/pcImage.png'
import AddedCheck from '../../icons/check.png'
import './Product.css'

export default class ProductGenerator extends  Component {

   state = {
        productList: [
            {
                id: 1,
                description: `Monitor LED 27" Gamer Curvo Samsung 1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50`,
                discount: 'R$ 2.599,00',
                price: `R$ 2.813,99`,
                imgProduct: './icons/pcImage.png',
                nameField: 'adicionar',
                isProductAdd: true,
                isFavorite: false,
            },
            {
                id: 2,
                description: `Monitor LED 27" Gamer Curvo Samsung 1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50`,
                discount: 'R$ 2.599,00',
                price: `R$ 2.813,99`,
                imgProduct: './icons/pcImage.png',
                nameField: 'adicionar',
                isProductAdd: true,
                isFavorite: false,
            }
        ]
   }

    render() {
        return(
            <div className="product">
                {this.state.productList.map((item) =>
                    <div className="productPc" key={item.id}>
                        <div className="ajustMargin productPc--img">
                            <div className="wishList">
                                <div className={item.isFavorite ? 'wishListCardAddedImg' : 'wishListCard'} >
                                    <div 
                                        className={item.isFavorite ? 'wishListAddedImg' : 'wishListImg'}  
                                        onClick={() => this.toggleClassWishList(item)}
                                    ></div>
                                </div>
                            </div>
                            <img className="imgProduct" src={PcImage} alt="product"></img>
                        </div>

                        <div className="ajustMargin productPc--description"> {item.description} </div>

                        <div className="ajustMargin productPc--price"> {item.price} </div> 

                        <div className="ajustMargin productPc--discount"> {item.discount} </div> 

                        <div className="ajustMargin productPc--quota"> 
                            em até <span className="formatQuota">10x de R$ 259,90</span> sem juros
                        </div> 
                        
                        <div 
                            className={item.isProductAdd ? 'ajustMargin btn btn-add' : 'ajustMargin btn btn-added'} 
                            onClick={() => this.toggleClassBtn(item)} 
                        >
                            <img 
                                className={item.isProductAdd ? 'icon-notAdded' : 'icon-added'}  
                                src={AddedCheck} alt="added item"
                            ></img>
                            {item.nameField}
                        </div>
                    </div>
                )}
            </div>
        )
    }

    
    toggleClassBtn(item) {
        var arr = this.state.productList
        arr.forEach(obj => {
            if(obj.id === item.id) {
                obj.isProductAdd = !item.isProductAdd
                obj.nameField = obj.isProductAdd ? 'adicionar' : 'adicionado'
            }
        })

        this.setState({ productList: arr})
    };

    toggleClassWishList(item) {
        var arr = this.state.productList
        arr.forEach(obj => {
            if(obj.id === item.id) {
                obj.isFavorite = !item.isFavorite
            }
        })

        this.setState({ productList: arr})
    };
}