import { AsyncComponentLoader, defineAsyncComponent } from "vue";
import Loading from "../components/Loading.vue";
import Error from "../components/Error.vue";

export const defineAsyncComponentWithOptions = (
  loader: AsyncComponentLoader
) => {
  return defineAsyncComponent({
    loader: loader,
    loadingComponent: Loading,
    errorComponent: Error,
  });
};
