import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserList } from "../../components/UserList/UserList";
import { fetchAllUsersThunk } from "../../redux/users/operations";
import { FilterSelect } from "../../components/FilterSelect/FilterSelect";
import { selectFilteredData } from "../../redux/users/selectors";

const TweetsPage = () => {
  const dispatch = useDispatch();
  const filteredUsers = useSelector(selectFilteredData);
  const [visible, setVisible] = useState(3);

  useEffect(() => {
    dispatch(fetchAllUsersThunk());
  }, [dispatch]);

  const handleClick = () => {
    setVisible((prev) => prev + 3);
  };

  const visibleUsers = filteredUsers.slice(0, visible);
  const isLoadMoreBtnShown = filteredUsers.length > visibleUsers.length;

  return (
    <>
      <FilterSelect />
      <UserList users={visibleUsers} />
      {isLoadMoreBtnShown && (
        <button onClick={handleClick} type="button">
          Load more
        </button>
      )}
    </>
  );
};

export default TweetsPage;
