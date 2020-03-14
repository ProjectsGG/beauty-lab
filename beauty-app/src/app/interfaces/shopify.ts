export interface RespuestaProducts {
  products: Product[];
}

export interface Product {
  id: number;
  title: string;
  body_html: string;
  vendor: string;
  product_type: string;
  created_at: string;
  handle: string;
  updated_at: string;
  published_at: string;
  template_suffix?: string;
  published_scope: string;
  tags: string;
  admin_graphql_api_id: string;
  options: Option[];
  images: Image[];
  image: Image2;
}

export interface Image2 {
  id: number;
  product_id: number;
  position: number;
  created_at: string;
  updated_at: string;
  alt?: any;
  width: number;
  height: number;
  src: string;
  variant_ids: number[];
  admin_graphql_api_id: string;
}

export interface Image {
  id: number;
  product_id: number;
  position: number;
  created_at: string;
  updated_at: string;
  alt?: any;
  width: number;
  height: number;
  src: string;
  variant_ids: (number | number)[];
  admin_graphql_api_id: string;
}

export interface Option {
  id: number;
  product_id: number;
  name: string;
  position: number;
}