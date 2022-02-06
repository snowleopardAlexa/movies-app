import { makeStyles } from "@material-ui/core/styles";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { RestoreIcon, FavoriteIcon, LocationOnIcon, Restore } from "@material-ui/icons";
import { mergeClasses } from "@material-ui/styles";

const useStyles = makeStyles({
    root: {
        width: 500,
    }
})

const BottomNav = () => {
  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
          setValue(newValue);
      }}
      showLabels
      className={mergeClasses.root}
    >
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
    </BottomNavigation>
  );
};

export default BottomNav;
