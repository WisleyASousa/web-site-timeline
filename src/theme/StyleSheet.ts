import { Breakpoints } from "@displaykit/responsive_styles";

// Generics
type ResponsiveProperty<Type> = Partial<Record<Breakpoints, Type>>;

export interface StyleSheet {
  fontFamily?: ResponsiveProperty<string> | string;
  backgroundColor?: ResponsiveProperty<string> | string;
  [key: string]: any;
}
// [key: string]: any; = recebendo qualquer chave e valor que funcione, pra evitar ficar sempre ficar cadastrando todos os valores.