export enum RoutePath {
    Index = '/',
    Register = '/sign-up',
    HomeShop = '/pages/about-us',
    Collection = '/collections/all',
    BlogNews = '/blog/news',
    CheckOrder = '/page/check-order',
    Contact = '/page/contact'
}

export const PrivateRoutes = [
    RoutePath.Index,
    RoutePath.Register,
    RoutePath.HomeShop,
    RoutePath.Collection,
    RoutePath.BlogNews,
    RoutePath.CheckOrder,
    RoutePath.Contact
]

export const PublicRoutes = [RoutePath.Index, RoutePath.Register]
