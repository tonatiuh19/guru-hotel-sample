const isClosedBusinesses = (storeIds: string, id: string) => {
  if (storeIds.toString().split("*").indexOf(id) > -1) {
    return true;
  } else {
    return false;
  }
};

export default isClosedBusinesses;
