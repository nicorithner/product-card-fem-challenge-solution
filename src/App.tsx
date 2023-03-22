import ProductCard from "./components/productCard/ProductCard";
import GlobalStyles from "./GlobalStyles";
import { AppWrapper } from "./App.styled";

function App() {
  return (
    <AppWrapper>
      <ProductCard />
      <GlobalStyles />
    </AppWrapper>
  );
}

export default App;
