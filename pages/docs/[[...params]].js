import { useRouter } from "next/router";
export default function Docs() {
  const router = useRouter();
  const params = router.query.params || [];

  return <div>
    breadcrumb {params.join("/")}
    
  </div>;
}
