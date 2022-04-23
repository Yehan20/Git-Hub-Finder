const useGithub = () => {
        const clientid='0e16d994ac85307434ce';
        const clientsecret='1fdd64acdc503eade28d658ada9455561fa16992';
        const repos_count=3;
        const repos_sort='created:asc';

    return  {
       clientid,clientsecret,repos_count,repos_sort
    } ;
}
 
export default useGithub;