# Bootstrap Theme for TiendApp Ecommerce Platform

## Introduction

TiendApp ([https://www.tiendapp.cl](https://www.tiendapp.cl "TiendApp online website")) is a web application that creates Ecommerce web pages. TiendApp aims to be fast, easy and customizable, achieving the last objective by providing customizable themes. *Bootstrap Theme for TiendApp* is a free theme that can be used as a base for creating new themes. Eventually, you could earn profit by publishing your theme at TiendApp's theme store.

## Guidelines for creating your own theme

### Introduction

Themes at TiendApp are built using ([https://github.com/Shopify/liquid](Liquid Template Engine "Liquid documentation on GitHub")), allowing the inclusion of variables and methods inside the themes. Also, although you can communicate with TiendApp's API as you want, we provide an *Angular JS* API to facilitate processes such as authentication and adding products to cart.

To create a theme, you must first create the fundamental views which are detailed below. You can also create as much partial views as you wish by using the `include` tag from *Liquid*. The second step is to connect your theme with the *Angular JS API* and the final one is to configure the theme's customization, which allows its users to easily change colors, fonts, sizes, between others.

### Required Views

#### layout.liquid

This is the layout view, in which every other view is rendered. In this view you should include all partials that should be included in every view, such as the header and footer. To render the contents of the current view inside layout.liquid, include the tag `{{ content_for_layout }}`. Also, you will have access to the following variables:

+ `domain`: Current Store subdomain, also used as an ID.
+ `taxon`: All store taxons or categories.
+ `root_taxons`: All mother categories, the ones that should be displayed first.
+ `content_for_layout`: Yields current views
+ `template_for`: Name of the view that is being rendered (For ex. 'home')

#### home.liquid

TODO

#### product.liquid

TODO

#### blog.liquid

TODO

#### static_page.liquid

TODO

#### post.liquid

TODO

#### order.liquid

TODO

#### home.liquid

TODO

### Available Objects

Each view serves store objects such as `store`, `product`, and others. This section describes the attributes and methods of each one of this objects.

#### store

TODO

#### customization

TODO

#### preview

TODO

#### available_fonts

TODO

#### user

TODO

#### extra

TODO

### Angular JS API

TODO

### Customization

TODO

## How to publish your theme for sale on TiendApp's Theme Store

Currently an automated process to send your theme is being developed by the team. Therefore, in order to publish your theme, please contact us.