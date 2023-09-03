export interface Component {
  id: string;
  order: number;
  type:
    | 'text'
    | 'image'
    | 'video'
    | 'code'
    | 'link'
    | 'file'
    | 'html'
    | 'markdown';
  data: string;
  created: Date;
  updated: Date;
}