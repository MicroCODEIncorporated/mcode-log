# UTC/Zulu Time Implementation Summary

## Overview

This implementation adds comprehensive UTC/Zulu time support to the mcode-log library to properly handle timestamps ending with 'Z' and ensure accurate time comparisons for LATE/EARLY detection in real-time monitoring applications.

## Changes Made

### 1. UTC/Zulu Time Utilities (index.js)

Added static utility methods to the mcode namespace:

- `mcode.parseZuluTime(timestamp)` - Parses various timestamp formats including 'Z' time
- `mcode.getCurrentZuluTime()` - Gets current UTC time in milliseconds
- `mcode.formatMilitaryTime(timestamp)` - Formats as local 24-hour time (HH:MM:SS)
- `mcode.formatMeridianTime(timestamp)` - Formats as local 12-hour time with AM/PM
- `mcode.formatUTCTime(timestamp)` - Formats as UTC time
- `mcode.isTimestampInView(timestamp, windowMs)` - UTC-based LATE/EARLY/VISIBLE detection
- `mcode.formatTimeByMode(timestamp, displayMode)` - Format according to display mode

### 2. Time Display Formats

Added `mcode.TIME_FORMATS` constant with options:

- `MILITARY` - 24-hour format (default): "14:30:15"
- `MERIDIAN` - 12-hour format: "2:30:15 PM"
- `UTC` - UTC format: "14:30:15 UTC"

### 3. Enhanced Measurement Processing

The library provides timestamp parsing that can be integrated into applications to:

- Check for `_ts` fields: `Updated_ts`, `Created_ts` in addition to `timestamp`
- Use `mcode.parseZuluTime()` for proper UTC parsing
- Maintain backward compatibility with existing timestamp formats

### 4. Improved LATE/EARLY Detection

The `isTimestampInView()` method provides accurate time window detection:

- Uses UTC/Zulu time utilities for accurate comparisons
- Compares measurement timestamps against current UTC time consistently
- Returns 'LATE', 'EARLY', 'VISIBLE', or 'INVALID' status
- Supports configurable time windows

### 5. Time Display Formatting

Multiple formatting methods for different display needs:

- Use configurable time display formats
- Default to local military time (24-hour format)
- Support all three display format modes
- Consistent formatting across applications

## Usage Examples

### Setting Time Display Format

```javascript
// Use military time format (default)
const militaryTime = mcode.formatTimeByMode(
  timestamp,
  mcode.TIME_FORMATS.MILITARY
);
// Returns: "14:30:15"

// Use meridian format
const meridianTime = mcode.formatTimeByMode(
  timestamp,
  mcode.TIME_FORMATS.MERIDIAN
);
// Returns: "2:30:15 PM"

// Use UTC format
const utcTime = mcode.formatTimeByMode(timestamp, mcode.TIME_FORMATS.UTC);
// Returns: "14:30:15 UTC"

// Or use specific format methods directly
const military = mcode.formatMilitaryTime(timestamp);
const meridian = mcode.formatMeridianTime(timestamp);
const utc = mcode.formatUTCTime(timestamp);
```

### Parsing Timestamps

```javascript
// Parse various timestamp formats
const date1 = mcode.parseZuluTime("2024-10-27T14:30:15.000Z"); // ISO with Z
const date2 = mcode.parseZuluTime(1698416415000); // Milliseconds
const date3 = mcode.parseZuluTime(new Date()); // Date object

// Get current UTC time
const now = mcode.getCurrentZuluTime(); // Returns milliseconds
```

### Measurement Objects with \_ts Fields

```javascript
// All of these timestamp fields can be parsed
const measurement = {
  timestamp: "2024-10-27T14:30:15.000Z", // Primary
  Created_ts: "2024-10-27T14:30:10.000Z", // Alternative
  Updated_ts: "2024-10-27T14:30:15.000Z", // Alternative
  value: 25.5,
  station: "Station1",
  sensor: "Temperature",
};

// Parse the timestamp
const parsedTime = mcode.parseZuluTime(
  measurement.timestamp || measurement.Created_ts || measurement.Updated_ts
);
```

### LATE/EARLY/VISIBLE Detection

```javascript
// Check if measurement is within time window (30 second window)
const status = mcode.isTimestampInView("2024-10-27T14:30:15.000Z", 30000);
// Returns: 'LATE', 'EARLY', 'VISIBLE', or 'INVALID'

// Custom time window (60 seconds)
const status60 = mcode.isTimestampInView(timestamp, 60000);
```

## Technical Implementation Details

### 1. Timestamp Priority Order

When integrating into applications, timestamps can be checked in priority order:

1. `measurement.timestamp`
2. `measurement.time`
3. `measurement.Updated_ts`
4. `measurement.Created_ts`
5. Current UTC time (fallback via `mcode.getCurrentZuluTime()`)

### 2. UTC Consistency

- All time comparisons use UTC milliseconds consistently
- LATE/EARLY/VISIBLE detection compares UTC timestamps against current UTC time
- Eliminates timezone-related comparison errors
- `isTimestampInView()` returns 'VISIBLE' when timestamp is within the time window

### 3. Backward Compatibility

- Supports multiple timestamp formats (ISO strings, milliseconds, Date objects)
- Returns null or appropriate fallback values for invalid inputs
- No breaking changes to existing time utilities
- Can be integrated into existing applications without modification

### 4. Performance Considerations

- Timestamp parsing is optimized with early validation
- Static utility methods for reusability across modules
- Minimal overhead with direct Date object operations
- Frozen TIME_FORMATS constant for immutability

## Future Enhancements

The implementation is structured to easily support:

1. Additional time display formats (e.g., relative time)
2. Timezone-specific displays
3. Custom time formatting options
4. Integration with date-time picker components

## API Reference

### Constants

- `mcode.TIME_FORMATS.MILITARY` - 24-hour time format
- `mcode.TIME_FORMATS.MERIDIAN` - 12-hour time format with AM/PM
- `mcode.TIME_FORMATS.UTC` - UTC time format

### Methods

- `mcode.getCurrentZuluTime()` - Returns current UTC time in milliseconds
- `mcode.parseZuluTime(timestamp)` - Parses timestamp to Date object
- `mcode.formatMilitaryTime(timestamp)` - Returns "HH:MM:SS"
- `mcode.formatMeridianTime(timestamp)` - Returns "H:MM:SS AM/PM"
- `mcode.formatUTCTime(timestamp)` - Returns "HH:MM:SS UTC"
- `mcode.formatTimeByMode(timestamp, mode)` - Returns formatted time based on mode
- `mcode.isTimestampInView(timestamp, windowMs)` - Returns 'LATE', 'EARLY', 'VISIBLE', or 'INVALID'

## Files Modified

1. `index.js` - Main mcode-log library implementation (UTC/Zulu Time Utilities section)

## Testing

The implementation can be tested by:

1. Importing mcode-log in your application or Node.js environment
2. Testing with various timestamp formats (ISO strings, milliseconds, Date objects)
3. Verifying time formatting with different display modes
4. Testing LATE/EARLY/VISIBLE detection with out-of-window timestamps
5. Running the included test suite (if available)

```javascript
// Example test
const now = mcode.getCurrentZuluTime();
const pastTime = now - 60000; // 60 seconds ago
const futureTime = now + 60000; // 60 seconds ahead

console.log(mcode.isTimestampInView(pastTime, 30000)); // 'LATE'
console.log(mcode.isTimestampInView(now, 30000)); // 'VISIBLE'
console.log(mcode.isTimestampInView(futureTime, 30000)); // 'EARLY'
```

This implementation ensures proper handling of UTC/Zulu timestamps from external systems while providing flexible display options for local time visualization in any application using the mcode-log library.
