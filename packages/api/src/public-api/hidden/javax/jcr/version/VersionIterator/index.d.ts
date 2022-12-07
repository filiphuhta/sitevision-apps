import Version from "../Version";
import RangeIterator from "../../RangeIterator";

/**
 * Allows easy iteration through a list of <code>Version</code>s objects with
 * <code>nextVersion</code> as well as a <code>skip</code> method inherited from
 * <code>RangeIterator</code>.
 *
 * <p><strong>Sitevision note:</strong> Unsupported operation</p>
  
    */
interface VersionIterator {
  /**
   * Returns the next <code>Version</code> in the iteration.
   * @return the next <code>Version</code> in the iteration.
   * @throws java.util.NoSuchElementException if iteration has no more <code>Version</code>s.
   */
  nextVersion(): Version;
}

export default VersionIterator;
