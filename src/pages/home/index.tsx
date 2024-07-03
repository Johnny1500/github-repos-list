import useStore from "../../shared/model/store";

export default function HomePage() {
  const currentPage = useStore((state) => state.currentPage);

  console.log('currentPage === ', currentPage);

  return <div>Test3</div>;
}
