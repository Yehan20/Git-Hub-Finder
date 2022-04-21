const useGithub = () => {
        const clientid='3ad13a872bea12303fc4';
        const clientsecret='8328c7121464259f1371b11ab1761f5237b44ba0';
        const repos_count=5;
        const repos_sort='created:asc';

    return  {
       clientid,clientsecret,repos_count,repos_sort
    } ;
}
 
export default useGithub;