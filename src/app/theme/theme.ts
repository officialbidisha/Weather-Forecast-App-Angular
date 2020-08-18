export interface Theme {
    name: string;
    properties: any;
  }
  
  export const light: Theme = {
    name: "light",
    properties: {
      
  
      "--background-default": "#FFFFFF",
      "--background-light": "#FFFFFF",
      "--color-scheme":"['#ff3333','#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']",
      "--stroke-color":"#e4e4e4",
      "--weatherDiv-color":"#ffffff",
      "--normalcolors":"#000000",
      "--chartfiller":"#0000000",
      "--fillpath":"000000",
      "--radii":"0px",
      
    }
  };
  
  export const dark: Theme = {
    name: "dark",
    properties: {
     
  
      "--background-default": "#797C80",
      "--background-light":"#2a2a2a",
      "--color-scheme":"['#0000ff','#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']",
      "--stroke-color":"#262b38ad",
      "--weatherDiv-color":"#1b1b1b",
      "--normalcolors":"#ffffff",
      "--chartfiller":"#ffffff",
      "--fillpath":"#ffffff",
      "--radii":"35px",
      
    }
  };