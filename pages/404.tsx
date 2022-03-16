import type {NextPage} from "next";
import Link from '../src/components/Link';

const NotFound: NextPage = () => {
  return (
    <div>
      <h1>Você se perdeu e caiu na página 404 :O</h1>
      <Link href="/">
          Ir para a home
      </Link>
    </div>
  );
};

export default NotFound;
