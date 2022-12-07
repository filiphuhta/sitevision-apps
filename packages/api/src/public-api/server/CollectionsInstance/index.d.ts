/**
 * Sorts the specified list into ascending order, according to the <i>natural ordering</i> of its elements.
 * @param <T> the class of the objects in the list
 * @param aList the list to be sorted.
 * @throws ClassCastException if the list contains elements that are not <i>mutually comparable</i> (for example, strings and integers).
 * @throws UnsupportedOperationException if the specified list's list-iterator does not support the <tt>set</tt> operation.
 */
export function sort(aList: unknown): void;

/**
 * Sorts the specified list according to the order induced by the specified comparator.
 * @param <T> the class of the objects in the list
 * @param aList the list to be sorted.
 * @param aComparator the comparator to determine the order of the list. A <tt>null</tt> value indicates that the elements' <i>natural ordering</i> should be used.
 * @throws ClassCastException if the list contains elements that are not <i>mutually comparable</i> using the specified comparator.
 * @throws UnsupportedOperationException if the specified list's list-iterator does not support the <tt>set</tt> operation.
 */
export function sort(aList: unknown, aComparator: unknown): void;

/**
 * Searches the specified list for the specified object using the binary search algorithm.
 * @param <T> the class of the objects in the list
 * @param aList the list to be searched.
 * @param aKey the key to be searched for.
 * @return the index of the search key, if it is contained in the list; otherwise, <tt>(-(<i>insertion point</i>) - 1)</tt>. The <i>insertion point</i> is defined as the point at which the key would be inserted into the list: the index of the first element greater than the key, or <tt>aList.size()</tt> if all elements in the list are less than the specified key. Note that this guarantees that the return value will be &gt;= 0 if and only if the key is found.
 * @throws ClassCastException if the list contains elements that are not <i>mutually comparable</i> (for example, strings and integers), or the search key is not mutually comparable with the elements of the list.
 */
export function binarySearch(aList: unknown, aKey: unknown): number;

/**
 * Searches the specified list for the specified object using the binary search algorithm.
 * @param <T> the class of the objects in the list
 * @param aList the list to be searched.
 * @param aKey the key to be searched for.
 * @param aComparator the comparator by which the list is ordered. A <tt>null</tt> value indicates that the elements' Comparable natural ordering should be used.
 * @return the index of the search key, if it is contained in the list; otherwise, <tt>(-(<i>insertion point</i>) - 1)</tt>. The <i>insertion point</i> is defined as the point at which the key would be inserted into the list: the index of the first element greater than the key, or <tt>aList.size()</tt> if all elements in the list are less than the specified key. Note that this guarantees that the return value will be &gt;= 0 if and only if the key is found.
 * @throws ClassCastException if the list contains elements that are not <i>mutually comparable</i> using the specified comparator, or the search key is not mutually comparable with the elements of the list using this comparator.
 */
export function binarySearch(
  aList: unknown,
  aKey: unknown,
  aComparator: unknown
): number;

/**
 * Reverses the order of the elements in the specified list.
 * @param aList the list whose elements are to be reversed.
 * @throws UnsupportedOperationException if the specified list or its list-iterator does not support the <tt>set</tt> operation.
 */
export function reverse(aList: unknown): void;

/**
 * Randomly permutes the specified list using a default source of randomness.
 * @param aList the list to be shuffled.
 * @throws UnsupportedOperationException if the specified list or its list-iterator does not support the <tt>set</tt> operation.
 */
export function shuffle(aList: unknown): void;

/**
 * Randomly permute the specified list using the specified source of randomness.
 * @param aList the list to be shuffled.
 * @param aRandom the source of randomness to use to shuffle the list.
 * @throws UnsupportedOperationException if the specified list or its list-iterator does not support the <tt>set</tt> operation.
 */
export function shuffle(aList: unknown, aRandom: unknown): void;

/**
 * Swaps the elements at the specified positions in the specified list.
 * @param aList The list in which to swap elements.
 * @param anIndex the index of one element to be swapped.
 * @param anAnotherIndex the index of the other element to be swapped.
 * @throws IndexOutOfBoundsException if either <tt>anIndex</tt> or <tt>j</tt> is out of range (anIndex &lt; 0 || anIndex &gt;= aList.size() || anAnotherIndex &lt; 0 || anAnotherIndex &gt;= aList.size()).
 */
export function swap(
  aList: unknown,
  anIndex: number,
  anAnotherIndex: number
): void;

/**
 * Replaces all of the elements of the specified list with the specified element.
 * @param <T> the class of the objects in the list
 * @param aList the list to be filled with the specified element.
 * @param aValue The element with which to fill the specified list.
 * @throws UnsupportedOperationException if the specified list or its list-iterator does not support the <tt>set</tt> operation.
 */
export function fill(aList: unknown, aValue: unknown): void;

/**
 * Copies all of the elements from one list into another.
 * @param <T> the class of the objects in the list
 * @param aDestination The destination list.
 * @param aSource The source list.
 * @throws IndexOutOfBoundsException if the destination list is too small to contain the entire source List.
 * @throws UnsupportedOperationException if the destination list's list-iterator does not support the <tt>set</tt> operation.
 */
export function copy(aDestination: unknown, aSource: unknown): void;

/**
 * Returns the minimum element of the given collection, according to the <i>natural ordering</i> of its elements.
 * @param <T> the class of the objects in the collection
 * @param aCollection the collection whose minimum element is to be determined.
 * @return the minimum element of the given collection, according to the <i>natural ordering</i> of its elements.
 * @throws ClassCastException if the collection contains elements that are not <i>mutually comparable</i> (for example, strings and integers).
 * @throws NoSuchElementException if the collection is empty.
 */
export function min(aCollection: unknown): unknown;

/**
 * Returns the minimum element of the given collection, according to the order induced by the specified comparator.
 * @param <T> the class of the objects in the collection
 * @param aCollection the collection whose minimum element is to be determined.
 * @param aComparator the comparator with which to determine the minimum element. A <tt>null</tt> value indicates that the elements' <i>natural ordering</i> should be used.
 * @return the minimum element of the given collection, according to the specified comparator.
 * @throws ClassCastException if the collection contains elements that are not <i>mutually comparable</i> using the specified comparator.
 * @throws NoSuchElementException if the collection is empty.
 */
export function min(aCollection: unknown, aComparator: unknown): unknown;

/**
 * Returns the maximum element of the given collection, according to the
 * <i>natural ordering</i> of its elements.
 * @param <T> the class of the objects in the collection
 * @param aCollection the collection whose maximum element is to be determined.
 * @return the maximum element of the given collection, according to the <i>natural ordering</i> of its elements.
 * @throws ClassCastException if the collection contains elements that are not <i>mutually comparable</i> (for example, strings and integers).
 * @throws NoSuchElementException if the collection is empty.
 */
export function max(aCollection: unknown): unknown;

/**
 * Returns the maximum element of the given collection, according to the
 * order induced by the specified comparator.
 * @param <T> the class of the objects in the collection
 * @param aCollection the collection whose maximum element is to be determined.
 * @param aComparator the comparator with which to determine the maximum element. A <tt>null</tt> value indicates that the elements' <i>natural ordering</i> should be used.
 * @return the maximum element of the given collection, according to the specified comparator.
 * @throws ClassCastException if the collection contains elements that are not <i>mutually comparable</i> using the specified comparator.
 * @throws NoSuchElementException if the collection is empty.
 */
export function max(aCollection: unknown, aComparator: unknown): unknown;

/**
 * Rotates the elements in the specified list by the specified distance.
 * @param aList the list to be rotated.
 * @param aDistance the distance to rotate the list. There are no constraints on this value; it may be zero, negative, or greater than <tt>aList.size()</tt>.
 * @throws UnsupportedOperationException if the specified list or its list-iterator does not support the <tt>set</tt> operation.
 */
export function rotate(aList: unknown, aDistance: number): void;

/**
 * Replaces all occurrences of one specified value in a list with another.
 * @param <T> the class of the objects in the list
 * @param aList the list in which replacement is to occur.
 * @param anOldValue the old value to be replaced.
 * @param aNewValue the new value with which <tt>anOldValue</tt> is to be replaced.
 * @return <tt>true</tt> if <tt>aList</tt> contained one or more elements <tt>e</tt> such that <tt>(anOldValue==null ? e==null : anOldValue.equals(e))</tt>.
 * @throws UnsupportedOperationException if the specified list or its list-iterator does not support the <tt>set</tt> operation.
 */
export function replaceAll(
  aList: unknown,
  anOldValue: unknown,
  aNewValue: unknown
): boolean;

/**
 * Returns the starting position of the first occurrence of the specified
 * target list within the specified source list, or -1 if there is no such occurrence.
 * @param aSource the list in which to search for the first occurrence of <tt>target</tt>.
 * @param aTarget the list to search for as a subList of <tt>aSource</tt>.
 * @return the starting position of the first occurrence of the specified target list within the specified source list, or -1 if there is no such occurrence.
 */
export function indexOfSubList(aSource: unknown, aTarget: unknown): number;

/**
 * Returns the starting position of the last occurrence of the specified
 * target list within the specified source list, or -1 if there is no such occurrence.
 * @param aSource the list in which to search for the last occurrence of <tt>target</tt>.
 * @param aTarget the list to search for as a subList of <tt>aSource</tt>.
 * @return the starting position of the last occurrence of the specified target list within the specified source list, or -1 if there is no such occurrence.
 */
export function lastIndexOfSubList(aSource: unknown, aTarget: unknown): number;

/**
 * Returns an unmodifiable view of the specified collection.
 * @param <T> the class of the objects in the collection
 * @param aCollection the collection for which an unmodifiable view is to be returned.
 * @return an unmodifiable view of the specified collection.
 */
export function unmodifiableCollection(aCollection: unknown): unknown;

/**
 * Returns an unmodifiable view of the specified set.
 * @param <T> the class of the objects in the set
 * @param aSet the set for which an unmodifiable view is to be returned.
 * @return an unmodifiable view of the specified set.
 */
export function unmodifiableSet(aSet: unknown): unknown;

/**
 * Returns an unmodifiable view of the specified sorted set.
 * @param <T> the class of the objects in the set
 * @param aSet the sorted set for which an unmodifiable view is to be returned.
 * @return an unmodifiable view of the specified sorted set.
 */
export function unmodifiableSortedSet(aSet: unknown): unknown;

/**
 * Returns an unmodifiable view of the specified list.
 * @param <T> the class of the objects in the list
 * @param aList the list for which an unmodifiable view is to be returned.
 * @return an unmodifiable view of the specified list.
 */
export function unmodifiableList(aList: unknown): unknown;

/**
 * Returns an unmodifiable view of the specified map.
 * @param <K> the class of the map keys
 * @param <V> the class of the map values
 * @param aMap the map for which an unmodifiable view is to be returned.
 * @return an unmodifiable view of the specified map.
 */
export function unmodifiableMap(aMap: unknown): unknown;

/**
 * Returns an unmodifiable view of the specified sorted map.
 * @param <K> the class of the map keys
 * @param <V> the class of the map values
 * @param aMap the sorted map for which an unmodifiable view is to be returned.
 * @return an unmodifiable view of the specified sorted map.
 */
export function unmodifiableSortedMap(aMap: unknown): unknown;

/**
 * Returns a synchronized (thread-safe) collection backed by the specified collection.
 * @param <T> the class of the objects in the collection
 * @param aCollection the collection to be "wrapped" in a synchronized collection.
 * @return a synchronized view of the specified collection.
 */
export function synchronizedCollection(aCollection: unknown): unknown;

/**
 * Returns a synchronized (thread-safe) set backed by the specified set.
 * @param <T> the class of the objects in the set
 * @param aSet the set to be "wrapped" in a synchronized set.
 * @return a synchronized view of the specified set.
 */
export function synchronizedSet(aSet: unknown): unknown;

/**
 * Returns a synchronized (thread-safe) sorted set backed by the specified sorted set.
 * @param <T> the class of the objects in the set
 * @param aSet the sorted set to be "wrapped" in a synchronized sorted set.
 * @return a synchronized view of the specified sorted set.
 */
export function synchronizedSortedSet(aSet: unknown): unknown;

/**
 * Returns a synchronized (thread-safe) list backed by the specified list.
 * @param <T> the class of the objects in the list
 * @param aList the list to be "wrapped" in a synchronized list.
 * @return a synchronized view of the specified list.
 */
export function synchronizedList(aList: unknown): unknown;

/**
 * Returns a synchronized (thread-safe) map backed by the specified map.
 * @param <K> the class of the map keys
 * @param <V> the class of the map values
 * @param aMap the map to be "wrapped" in a synchronized map.
 * @return a synchronized view of the specified map.
 */
export function synchronizedMap(aMap: unknown): unknown;

/**
 * Returns a synchronized (thread-safe) sorted map backed by the specified sorted map.
 * @param <K> the class of the map keys
 * @param <V> the class of the map values
 * @param aMap the sorted map to be "wrapped" in a synchronized sorted map.
 * @return a synchronized view of the specified sorted map.
 */
export function synchronizedSortedMap(aMap: unknown): unknown;

/**
 * Returns a dynamically typesafe view of the specified collection.
 * @param <E> the class of the objects in the collection
 * @param aCollection the collection for which a dynamically typesafe view is to be returned
 * @param aType the type of element that <tt>aCollection</tt> is permitted to hold
 * @return a dynamically typesafe view of the specified collection
 */
export function checkedCollection(
  aCollection: unknown,
  aType: unknown
): unknown;

/**
 * Returns a dynamically typesafe view of the specified set.
 * @param <E> the class of the objects in the set
 * @param aSet the set for which a dynamically typesafe view is to be returned
 * @param aType the type of element that <tt>aSet</tt> is permitted to hold
 * @return a dynamically typesafe view of the specified set
 */
export function checkedSet(aSet: unknown, aType: unknown): unknown;

/**
 * Returns a dynamically typesafe view of the specified sorted set.
 * @param <E> the class of the objects in the set
 * @param aSet the sorted set for which a dynamically typesafe view is to be returned
 * @param aType the type of element that <tt>aSet</tt> is permitted to hold
 * @return a dynamically typesafe view of the specified sorted set
 */
export function checkedSortedSet(aSet: unknown, aType: unknown): unknown;

/**
 * Returns a dynamically typesafe view of the specified list.
 * @param <E> the class of the objects in the list
 * @param aList the list for which a dynamically typesafe view is to be returned
 * @param aType the type of element that <tt>aList</tt> is permitted to hold
 * @return a dynamically typesafe view of the specified list
 */
export function checkedList(aList: unknown, aType: unknown): unknown;

/**
 * Returns a dynamically typesafe view of the specified map.
 * @param <K> the class of the map keys
 * @param <V> the class of the map values
 * @param aMap the map for which a dynamically typesafe view is to be returned
 * @param aKeyType the type of key that <tt>aMap</tt> is permitted to hold
 * @param aValueType the type of value that <tt>aMap</tt> is permitted to hold
 * @return a dynamically typesafe view of the specified map
 */
export function checkedMap(
  aMap: unknown,
  aKeyType: unknown,
  aValueType: unknown
): unknown;

/**
 * Returns a dynamically typesafe view of the specified sorted map.
 * @param <K> the class of the map keys
 * @param <V> the class of the map values
 * @param aMap the map for which a dynamically typesafe view is to be returned
 * @param aKeyType the type of key that <tt>aMap</tt> is permitted to hold
 * @param aValueType the type of value that <tt>aMap</tt> is permitted to hold
 * @return a dynamically typesafe view of the specified map
 */
export function checkedSortedMap(
  aMap: unknown,
  aKeyType: unknown,
  aValueType: unknown
): unknown;

/**
 * Returns the empty set (immutable).
 * @param <T> the class of the objects in the set
 * @return the empty set
 */
export function emptySet(): unknown;

/**
 * Returns the empty list (immutable).
 * @param <T> the class of the objects in the list
 * @return the empty list
 */
export function emptyList(): unknown;

/**
 * Returns the empty map (immutable).
 * @param <K> the class of the map keys
 * @param <V> the class of the map values
 * @return the empty map
 */
export function emptyMap(): unknown;

/**
 * Returns an immutable set containing only the specified object.
 * @param <T> the class of the objects in the set
 * @param aValue the sole object to be stored in the returned set.
 * @return an immutable set containing only the specified object.
 */
export function singleton(aValue: unknown): unknown;

/**
 * Returns an immutable list containing only the specified object.
 * @param <T> the class of the objects in the list
 * @param aValue the sole object to be stored in the returned list.
 * @return an immutable list containing only the specified object.
 */
export function singletonList(aValue: unknown): unknown;

/**
 * Returns an immutable map, mapping only the specified key to the specified value.
 * @param <K> the class of the map keys
 * @param <V> the class of the map values
 * @param key the sole key to be stored in the returned map.
 * @param aValue the value to which the returned map maps <tt>key</tt>.
 * @return an immutable map containing only the specified key-value mapping.
 */
export function singletonMap(key: unknown, aValue: unknown): unknown;

/**
 * Returns an immutable list consisting of <tt>n</tt> copies of the specified object.
 * @param <T> the class of the objects in the list
 * @param aCount the number of elements in the returned list.
 * @param aValue the element to appear repeatedly in the returned list.
 * @return an immutable list consisting of <tt>aCount</tt> copies of the specified object.
 * @throws IllegalArgumentException if <tt>aCount &lt; 0</tt>.
 */
export function nCopies(aCount: number, aValue: unknown): unknown;

/**
 * Returns a comparator that imposes the reverse of the <i>natural ordering</i> on a collection of objects that implement
 * the <tt>Comparable</tt> interface.
 * @param <T> the class of the objects compared by the comparator
 * @return a comparator that imposes the reverse of the <i>natural ordering</i> on a collection of objects that implement the <tt>Comparable</tt> interface.
 */
export function reverseOrder(): unknown;

/**
 * Returns a comparator that imposes the reverse ordering of the specified comparator.
 * @param <T> the class of the objects compared by the comparator
 * @param aComparator the Comparator
 * @return a comparator that imposes the reverse ordering of the specified comparator.
 */
export function reverseOrder(aComparator: unknown): unknown;

/**
 * Returns an enumeration over the specified collection.
 * @param <T> the class of the objects in the collection
 * @param aCollection the collection for which an enumeration is to be returned.
 * @return an enumeration over the specified collection.
 */
export function enumeration(aCollection: unknown): unknown;

/**
 * Returns an array list containing the elements returned by the specified enumeration in the order they are returned by the enumeration.
 * @param <T> the class of the objects in the enumeration
 * @param anEnumeration enumeration providing elements for the returned array list
 * @return an array list containing the elements returned by the specified enumeration.
 */
export function list(anEnumeration: unknown): unknown;

/**
 * Returns the number of elements in the specified collection equal to the specified object.
 * @param aCollection the collection in which to determine the frequency of <tt>aValue</tt>
 * @param aValue the object whose frequency is to be determined
 * @return the number of elements in {@code aCollection} equal to {@code aValue}
 * @throws NullPointerException if <tt>aCollection</tt> is null
 */
export function frequency(aCollection: unknown, aValue: unknown): number;

/**
 * Returns <tt>true</tt> if the two specified collections have no elements in common.
 * @param aCollection a collection
 * @param anAnotherCollection a collection
 * @return {@code true} if the two specified collections have no elements in common.
 * @throws NullPointerException if either collection is null
 */
export function disjoint(
  aCollection: unknown,
  anAnotherCollection: unknown
): boolean;

/**
 * Adds all of the specified elements to the specified collection.
 * @param <T> the class of the elements to add and of the collection
 * @param aCollection the collection into which <tt>elements</tt> are to be inserted
 * @param aValues the elements to insert into <tt>aCollection</tt>
 * @return <tt>true</tt> if the collection changed as a result of the call
 * @throws UnsupportedOperationException if <tt>aCollection</tt> does not support the <tt>add</tt> operation
 * @throws NullPointerException if <tt>aValues</tt> contains one or more null values and <tt>aCollection</tt> does not permit null elements, or if <tt>aCollection</tt> or <tt>aValues</tt> are <tt>null</tt>
 * @throws IllegalArgumentException if some property of a value in <tt>aValues</tt> prevents it from being added to <tt>aCollection</tt>
 */
export function addAll(aCollection: unknown, aValues: unknown): boolean;

/**
 * Returns a set backed by the specified map.
 * @param <E> the class of the map keys and of the objects in the returned set
 * @param aMap the backing map
 * @return the set backed by the map
 * @throws IllegalArgumentException if <tt>aMap</tt> is not empty
 */
export function newSetFromMap(aMap: unknown): unknown;

/**
 * Returns a view of a <code>Deque</code> as a Last-in-first-out (Lifo) <code>Queue</code>.
 * @param <T> the class of the objects in the deque
 * @param aDeque the deque
 * @return the queue
 */
export function asLifoQueue(aDeque: unknown): unknown;

/**
 * Returns an iterator that has no elements.
 * @param <T> type of elements, if there were any, in the iterator
 * @return an empty iterator
 * @since Sitevision 4.0
 * @since Java 1.7
 */
export function emptyIterator(): unknown;

/**
 * Returns a list iterator that has no elements.
 * @param <T> type of elements, if there were any, in the iterator
 * @return an empty list iterator
 * @since Sitevision 4.0
 * @since Java 1.7
 */
export function emptyListIterator(): unknown;

/**
 * Returns an enumeration that has no elements.
 * @param <T> the class of the objects in the enumeration
 * @return an empty enumeration
 * @since Sitevision 4.0
 * @since Java 1.7
 */
export function emptyEnumeration(): unknown;

/**
 * Returns an unmodifiable view of the specified navigable set.
 * @param <T> the class of the objects in the set
 * @param s the navigable set for which an unmodifiable view is to be returned
 * @return an unmodifiable view of the specified navigable set
 * @since Sitevision 4.0
 * @since Java 1.8
 */
export function unmodifiableNavigableSet(s: unknown): unknown;

/**
 * Returns an unmodifiable view of the specified navigable map.
 * @param <K> the class of the map keys
 * @param <V> the class of the map values
 * @param m the navigable map for which an unmodifiable view is to be returned
 * @return an unmodifiable view of the specified navigable map
 * @since Sitevision 4.0
 * @since Java 1.8
 */
export function unmodifiableNavigableMap(m: unknown): unknown;

/**
 * Returns a synchronized (thread-safe) navigable set backed by the
 * specified navigable set.
 * @param <T> the class of the objects in the set
 * @param s the navigable set to be "wrapped" in a synchronized navigableset
 * @return a synchronized view of the specified navigable set
 * @since Sitevision 4.0
 * @since Java 1.8
 */
export function synchronizedNavigableSet(s: unknown): unknown;

/**
 * Returns a synchronized (thread-safe) navigable map backed by the
 * specified navigable map.
 * @param <K> the class of the map keys
 * @param <V> the class of the map values
 * @param m the navigable map to be "wrapped" in a synchronized navigable map
 * @return a synchronized view of the specified navigable map.
 * @since Sitevision 4.0
 * @since Java 1.8
 */
export function synchronizedNavigableMap(m: unknown): unknown;

/**
 * Returns a dynamically typesafe view of the specified queue.
 * @param <E> the class of the objects in the queue
 * @param queue the queue for which a dynamically typesafe view is to be returned
 * @param type the type of element that {@code queue} is permitted to hold
 * @return a dynamically typesafe view of the specified queue
 * @since Sitevision 4.0
 * @since Java 1.8
 */
export function checkedQueue(queue: unknown, type: unknown): unknown;

/**
 * Returns a dynamically typesafe view of the specified navigable set.
 * @param <E> the class of the objects in the set
 * @param s the navigable set for which a dynamically typesafe view is to be returned
 * @param type the type of element that {@code s} is permitted to hold
 * @return a dynamically typesafe view of the specified navigable set
 * @since Sitevision 4.0
 * @since Java 1.8
 */
export function checkedNavigableSet(s: unknown, type: unknown): unknown;

/**
 * Returns a dynamically typesafe view of the specified navigable map.
 * @param <K> type of map keys
 * @param <V> type of map values
 * @param m the map for which a dynamically typesafe view is to be returned
 * @param keyType the type of key that {@code m} is permitted to hold
 * @param valueType the type of value that {@code m} is permitted to hold
 * @return a dynamically typesafe view of the specified map
 * @since Sitevision 4.0
 * @since Java 1.8
 */
export function checkedNavigableMap(
  m: unknown,
  keyType: unknown,
  valueType: unknown
): unknown;

/**
 * Returns an empty sorted set (immutable).
 * @param <E> type of elements, if there were any, in the set
 * @return the empty sorted set
 * @since Sitevision 4.0
 * @since Java 1.8
 */
export function emptySortedSet(): unknown;

/**
 * Returns an empty navigable set (immutable).
 * @param <E> type of elements, if there were any, in the set
 * @return the empty navigable set
 * @since Sitevision 4.0
 * @since Java 1.8
 */
export function emptyNavigableSet(): unknown;

/**
 * Returns an empty sorted map (immutable).
 * @param <K> the class of the map keys
 * @param <V> the class of the map values
 * @return an empty sorted map
 * @since Sitevision 4.0
 * @since Java 1.8
 */
export function emptySortedMap(): unknown;

/**
 * Returns an empty navigable map (immutable).
 * @param <K> the class of the map keys
 * @param <V> the class of the map values
 * @return an empty navigable map
 * @since Sitevision 4.0
 * @since Java 1.8
 */
export function emptyNavigableMap(): unknown;

/**
 * Instance wrapper for the <code>java.util.Collections</code> class that delegates all method calls to
 * the corresponding <code>Collections</code> method.
 *
 * <p>
 *    <em>Note! Method documentations in this interface are only excerpts. For full documentation, see official java.util.Collections Javadoc</em>
 * </p>
 *
 * <p>
 * An instance of the Sitevision class implementing this interface can be obtained via {@link InstanceCreatorUtil#getCollectionsInstance()}.
 * See {@link InstanceCreatorUtil} for how to obtain an instance of the <code>InstanceCreatorUtil</code> interface.
 * </p>The empty set (immutable).The empty list (immutable).The empty map (immutable).
 * @author Magnus Lövgren
 * @since Sitevision 3.1
 */
declare namespace collectionsInstance {
  export {
    sort,
    binarySearch,
    reverse,
    shuffle,
    swap,
    fill,
    copy,
    min,
    max,
    rotate,
    replaceAll,
    indexOfSubList,
    lastIndexOfSubList,
    unmodifiableCollection,
    unmodifiableSet,
    unmodifiableSortedSet,
    unmodifiableList,
    unmodifiableMap,
    unmodifiableSortedMap,
    synchronizedCollection,
    synchronizedSet,
    synchronizedSortedSet,
    synchronizedList,
    synchronizedMap,
    synchronizedSortedMap,
    checkedCollection,
    checkedSet,
    checkedSortedSet,
    checkedList,
    checkedMap,
    checkedSortedMap,
    emptySet,
    emptyList,
    emptyMap,
    singleton,
    singletonList,
    singletonMap,
    nCopies,
    reverseOrder,
    enumeration,
    list,
    frequency,
    disjoint,
    addAll,
    newSetFromMap,
    asLifoQueue,
    emptyIterator,
    emptyListIterator,
    emptyEnumeration,
    unmodifiableNavigableSet,
    unmodifiableNavigableMap,
    synchronizedNavigableSet,
    synchronizedNavigableMap,
    checkedQueue,
    checkedNavigableSet,
    checkedNavigableMap,
    emptySortedSet,
    emptyNavigableSet,
    emptySortedMap,
    emptyNavigableMap,
  };
}

export default collectionsInstance;
