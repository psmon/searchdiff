/**
 * Created by 박상만 on 2017-05-19.
 */




if( _pathName == '/air/domestic' )
    return "MDA-Air";
else if( _pathName.search('/air/') ==0 )
    return "MCA-Air";
else
    return "Unknown";

