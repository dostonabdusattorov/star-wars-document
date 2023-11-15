export const getSearchedItems = <T>(
  items: T[],
  searchText: string,
  filter: string = 'name'
): T[] => {
  return items.filter((item) =>
    (item as any)[filter].toLowerCase().includes(searchText.toLowerCase())
  );
};
