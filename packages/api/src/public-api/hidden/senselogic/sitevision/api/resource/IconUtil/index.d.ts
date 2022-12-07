import Node from "../../../../../javax/jcr/Node";

/**
 * Utility interface for Icons.
 *
 * <p>
 * An instance of the Sitevision class implementing this interface can be obtained via {@link senselogic.sitevision.api.Utils#getIconUtil()}.
 * See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the <code>Utils</code> interface.
 * </p>
 * @author Magnus Lövgren
 */

interface IconUtil {
  /**
   * Gets the file icon node for a given file extension.
   * @param aFileExtension the file extension (e.g "pdf", "PDF", "doc"). The extension is case insensitive.
   * @return the file icon node for aFileExtension, or <code>null</code> if the extension has no icon mapping
   */
  getFileIcons(aFileExtension: java.lang.String): Node;

  /**
   * Gets the small file icon URI for a given file extension
   * @param aFileExtension the file extension (e.g "pdf", "PDF", "doc"). The extension is case insensitive.
   * @return the small file icon URI for aFileExtension, or <code>null</code> if no small icon is specified for the extension
   */
  getSmallFileIconURI(aFileExtension: java.lang.String): string;

  /**
   * Gets the large file icon URI for a given file extension
   * @param aFileExtension the file extension (e.g "pdf", "PDF", "doc"). The extension is case insensitive.
   * @return the large file icon URI for aFileExtension, or <code>null</code> if no large icon is specified for the extension
   */
  getLargeFileIconURI(aFileExtension: java.lang.String): string;
}
