export enum DataStateEnum{
    LOADING,
    LOADED,
    ERROR
}


export enum  OfferActionsTypes{
  GET_ALL_OFFERS="[Offers] Get All Offers",
  GET_AVAILABLE_OFFERS="[Offers] Get Available Offers",
  SEARCH_OFFERS="[Offers] Search Offers",
  NEW_OFFER="[Offers] New Offer"
}

export interface  ActionEvent{
  typeAction: OfferActionsTypes,
  payload?: any
}

export interface AppDataState<T>{
    dataState?: DataStateEnum;
    data?: T;
    errorMessage?: string;
}
