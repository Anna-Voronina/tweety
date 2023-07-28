import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { UserList } from "../../components/UserList/UserList";
import { fetchAllUsersThunk } from "../../redux/users/operations";

const TweetsPage = () => {
  const dispatch = useDispatch();
  const [limit, setLimit] = useState(3);

  useEffect(() => {
    dispatch(fetchAllUsersThunk(limit));
  }, [dispatch, limit]);

  const handleClick = () => {
    setLimit((prev) => prev + 3);
  };

  return (
    <>
      <UserList />
      <button onClick={handleClick} type="button">
        Load more
      </button>
    </>
  );
};

export default TweetsPage;
