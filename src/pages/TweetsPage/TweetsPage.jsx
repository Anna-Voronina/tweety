import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserList } from "../../components/UserList/UserList";
import { fetchAllUsersThunk } from "../../redux/users/operations";
import { FilterSelect } from "../../components/FilterSelect/FilterSelect";
import { selectFilteredData } from "../../redux/users/selectors";
import { Button } from "../../components/Button/Button";

const TweetsPage = () => {
  const dispatch = useDispatch();
  const filteredUsers = useSelector(selectFilteredData);
  const [visible, setVisible] = useState(3);

  useEffect(() => {
    dispatch(fetchAllUsersThunk());
  }, [dispatch]);

  const handleLoadMoreBtnClick = () => {
    setVisible((prev) => prev + 3);
  };

  const visibleUsers = filteredUsers.slice(0, visible);
  const isLoadMoreBtnShown = filteredUsers.length > visibleUsers.length;

  return (
    <>
      <FilterSelect setVisibleCards={setVisible} />
      <UserList users={visibleUsers} />
      {isLoadMoreBtnShown && (
        <Button
          label="Load more"
          handleClick={handleLoadMoreBtnClick}
          version="third"
        />
      )}
    </>
  );
};

export default TweetsPage;
